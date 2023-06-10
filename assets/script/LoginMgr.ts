import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("LoginMgr")
export class LoginMgr extends Component {
  @property
  userName: string;
  @property
  password: string;
  start() {}

  update(deltaTime: number) {}

  onLoginBtnClick() {
    console.log("点击登录按钮");
    // 判断当前用户名和密码是否都填写
    if (!this.userName || !this.password) {
      return;
      }
    // 进行登录操作
      
  }
}
