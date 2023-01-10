import { NextApiRequest, NextApiResponse } from 'next';
import { withIronSessionApiRoute } from 'iron-session/next';
import { ironOptions } from 'config/index';
import { ISession } from 'pages/api';
import { getMyRepository } from 'db/index';
import { User, UserAuth } from 'db/entity';

export default withIronSessionApiRoute(login, ironOptions);

async function login(req: NextApiRequest, res: NextApiResponse) {
  const session: ISession = req.session;
  const { phone = '', verify = '', identity_type = 'phone' } = req.body;
  const userAuthRepo = await getMyRepository(UserAuth);
  const userRepo = await getMyRepository(User);
  console.log(userRepo);
  // const users = await (await getMyRepository(User))?.find();
  if (String(session.verifyCode) === String(verify)) {
    // 验证码正确,在 user_auths表中查找 identity_type 是否在存
    const userAuth = await userAuthRepo.findOne({
      where: {
        identity_type,
        identifier: phone,
      }
    });
    if(userAuth) {
      res?.status(200).json({
        msg: '登录成功',
        code: 200,
      });
    }else{
      // 新用户注册
      const user = new User();
      user.nickname = `用户_${Math.floor(Math.random() * 10000)}`;
      user.avatar = '/images/avatar.jpg';
      user.job = '暂无';
      user.introduce = '暂无';

      const userAuth = new UserAuth();
      userAuth.identifier = phone;
      userAuth.identity_type = identity_type;
      userAuth.credential = session.verifyCode;
      userAuth.user = user;

      const resUserAuth = await userAuthRepo.save(userAuth);
      console.log(resUserAuth)
    }
  } else {
    res?.status(200).json({
      msg: '请输入正确的验证码!',
      code: 1,
    });
  }



  res?.status(200).json({
    phone,
    verify,
    code: 0,
  });
}
