# 一、iOS环境搭建：

> 参考文档：https://www.reactnative.cn/docs/environment-setup

- node

- Watchman -> brew install watchman

  ```
  // 安装watchman 报错
  brew tap facebook/fb
  brew update
  brew install facebook/fb/watchman
  ```

- Xcode

- CocoaPods -> brew install cocoapods

  - Pod install 报错：HTTP/2 stream 1 was not closed cleanly before end of the underlying stream

    ```
    $ git config --global http.version HTTP/1.1
    ```

  - Pod install 的时候终端必须挂VPN

    ```
    ➜  export http_proxy='http://127.0.0.1:xxxx'
    ➜  export https_proxy='http://127.0.0.1:xxxx'
    ```


# 二、iOS项目运行

```
cd AwesomeProject
yarn ios
# 或者
yarn react-native run-ios
```

> yarn iOS 默认会启动虚拟机
>
> 真机运行参考：https://www.reactnative.cn/docs/running-on-device

# 三、Android环境搭建

> 参考文档：https://www.reactnative.cn/docs/environment-setup

- node
- Watchman -> brew install watchman
- JDK -> 需要JDK 11
  - ![image-20220820000830217](/var/folders/jx/mkl3ndb93kb02w7q_95nl1pc0000gn/T/abnerworks.Typora/image-20220820000830217.png)
  - Mac 多个jdk版本：https://www.jianshu.com/p/6273e7ab0c56
- [ Android Studio](https://developer.android.google.cn/studio/) -> 下载时间很长
- Android SDK套件 -> 下载时间很长

# 四、Android运行项目

```
cd AwesomeProject
yarn android
# 或者
yarn react-native run-android
```

> 注意：终端jdk版本需要选择jdk11
>
> 真机运行参考：https://www.reactnative.cn/docs/running-on-device

- 终端运行有问题可以先用Android Studio打开android目录编译运行一次
  - [问题1](https://stackoverflow.com/questions/66980512/android-studio-error-android-gradle-plugin-requires-java-11-to-run-you-are-cur)

# 五、相关文档

1. react-native组件：https://www.reactnative.cn/docs/components-and-apis
2. React-native API: https://www.reactnative.cn/docs/accessibilityinfo
3. 热更新介绍1(时间比较早了)：https://developer.aliyun.com/article/74390
4. 热更新介绍2（时间比较早了）：https://www.jianshu.com/p/8e08c7661275
5. 热更新方案：[react-native-code-push](https://github.com/microsoft/react-native-code-push)
6. RN bundle单独打包： https://cloud.tencent.com/developer/article/1953650
7. 路由导航react-navigation:https://reactnavigation.org/

# 六、webview加载本地资源

- [参考1](https://liruwei.github.io/2017/08/02/ReactNative-%E6%9C%AC%E5%9C%B0%E8%B5%84%E6%BA%90%E6%96%87%E4%BB%B6/)



