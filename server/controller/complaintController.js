import complaint from '../models/complaints.js';

export const registerComplaints = async(req, res) => {
    const { title, discription, category , image } = req.body;
    try {
        const result = await complaint.create({ title, discription, category, image});

        res.status(201).json({ result });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(error);
    }
};

export const getComplaints = async(req, res) => {
    try {
        const complaints = await complaint.find();
        res.status(200).json({ complaints });
      } catch (error) {
        res.status(500).json({ message: 'Something went wrong' });
        console.log(error);
      }
};



