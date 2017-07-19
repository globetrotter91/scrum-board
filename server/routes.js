import userRoute from './api/user';
import path from 'path'; 

export default function(app) {

  app.use('/api/users', userRoute);
/*
  var indexFn = function(req, res) {
    return res.sendFile(path.join(__dirname, './index.html'));
  };
  app.route('/*').get(indexFn);
  */
};
