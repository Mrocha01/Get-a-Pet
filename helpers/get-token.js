const getToken = (req) => {

 const authHeader = req.headers.authorization;

 if (!authHeader) {
    return null; // Retorna null para indicar que não há token na requisição;
}
 const token = authHeader.split(" ")[1];

 return token;
};

module.exports = getToken;