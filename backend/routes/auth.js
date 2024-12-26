router.post("/signup", async (req, res) => {
    try {
      const { email, password } = req.body;
      if (!email || !password) {
        return res.status(400).json({ message: "Email and password are required" });
      }
  
      const hashedPassword = await bcrypt.hash(password, 10);
  
      const newUser = new User({ email, password: hashedPassword });
      await newUser.save();
  
      res.status(201).json({ message: "User created successfully" });
    } catch (error) {
      console.error("Error during signup:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  