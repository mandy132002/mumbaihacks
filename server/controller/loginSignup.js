export const login = async(req, res) => {
    const { email, password } = req.body;
    
    try {
        console.log("mandar")
        const existingUser = await customer.findOne({ email });
        if(!existingUser) return res.status(404).json({error: "User doesn't exist. Please try again"});

        const validPassword = await bcrypt.compare(password, existingUser.password);
        if(!validPassword) return res.status(400).json({error: "Incorrect Password."});

        const token = jwt.sign({ email: existingUser.email, id: existingUser._id }, 'test', { expiresIn: '1h' });

        res.status(200).json({ result: existingUser, token });

    } catch (error) {
        return res.status(500).json({ error: "Something went wrong" });
    }
}