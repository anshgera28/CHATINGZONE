import jwt from "jsonwebtoken";
const isAuthenticated = async (req, res, next) => {
    try{
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({message: "Unauthorized"});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        if(!decoded){
            return res.status(401).json({message: "Invalid token"});
        }
        req.Id = decoded.userId; // store userId in request object
        next();
    }catch(error){
        console.log(error);
        return res.status(401).json({message: "Invalid token"});
    }
};
export { isAuthenticated };
