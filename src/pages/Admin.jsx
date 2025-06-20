import React, { useState, useEffect } from 'react';
import { auth, db } from '../firebase/config';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const [user, setUser] = useState(null);
  const [perfumes, setPerfumes] = useState([]);
  const [newPerfume, setNewPerfume] = useState({ name: '', price: '', image: '', description: '' });
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (!currentUser) {
        navigate('/login');
      } else {
        setUser(currentUser);
        fetchPerfumes();
      }
    });
    return () => unsubscribe();
  }, [navigate]);

  const fetchPerfumes = async () => {
    const perfumesCollection = collection(db, 'perfumes');
    const perfumeSnapshot = await getDocs(perfumesCollection);
    const perfumeList = perfumeSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setPerfumes(perfumeList);
  };

  const handleInputChange = (e) => {
    setNewPerfume({ ...newPerfume, [e.target.name]: e.target.value });
  };

  const handleAddPerfume = async () => {
    if (!newPerfume.name || !newPerfume.price) return;
    await addDoc(collection(db, 'perfumes'), {
      name: newPerfume.name,
      price: parseFloat(newPerfume.price),
      image: newPerfume.image,
      description: newPerfume.description,
    });
    setNewPerfume({ name: '', price: '', image: '', description: '' });
    fetchPerfumes();
  };

  const handleDeletePerfume = async (id) => {
    await deleteDoc(doc(db, 'perfumes', id));
    fetchPerfumes();
  };

  const handleUpdatePerfume = async (id, updatedPerfume) => {
    const perfumeRef = doc(db, 'perfumes', id);
    await updateDoc(perfumeRef, updatedPerfume);
    fetchPerfumes();
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Admin Panel</h1>
      <h2>Add New Perfume</h2>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={newPerfume.name}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="price"
        placeholder="Price"
        value={newPerfume.price}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={newPerfume.image}
        onChange={handleInputChange}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={newPerfume.description}
        onChange={handleInputChange}
      />
      <button onClick={handleAddPerfume}>Add Perfume</button>

      <h2>Existing Perfumes</h2>
      <ul>
        {perfumes.map(perfume => (
          <li key={perfume.id}>
            <h3>{perfume.name}</h3>
            <p>Price: ${perfume.price.toFixed(2)}</p>
            <p>{perfume.description}</p>
            <button onClick={() => handleDeletePerfume(perfume.id)}>Delete</button>
            {/* Update functionality can be added here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
