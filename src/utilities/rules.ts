export const rules = (req: any, res: any, next: any) => {
    res.header('Access-Control-Allow-Origin', '*');  // for production, remove this and add allowed Urls
    res.header('Access-Control-Allow-Headers', 'Origin, X-Request-With, Content-Type, Accept, Authorization');

    if(req.method == 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'GET PATCH DELETE POST PUT');
        return res.status(200).json({});
    }

    next();
}