import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
    try{
        const token = req.cookies.token;
        console.log(token);
        if(!token){
            return res.status(401).json({message: "Unauthorized"});
        }
        const decoded = await jwt.verify(token, process.env.JWT_SECRET_KEY);
    
        if(!decoded){
            return res.status(401).json({message: "Invalid token"});
        }
        req.Id = decoded.userId;
        next();
    }catch(error){
        console.log(error);
    }
};
export {isAuthenticated}

