---
title: git笔记
sidebarDepth: 1
---
[TOC]

## 一、git概述

#### 1、版本控制

  版本控制是一种记录文件内容变化，以便将来查阅特定版本修订情况的系统。  

  版本控制其实最重要的是可以记录文件修改历史记录，从而让用户能够查看历史版本，  

方便版本切换。

#### 2、git工作机制和代码托管中心

![image-20221002233804768](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221002233804768.png)



![image-20221002091111067](C:/Users/mrChen/AppData/Roaming/Typora/typora-user-images/image-20221002091111067.png)

  代码托管中心是基于网络服务器的远程代码仓库，一般我们简单称为远程库。   

  局域网  

- GitLab  

  互联网  

- GitHub（外网）  

- Gitee 码云（国内网站）

## 二、git常用命令



  官网地址： https://git-scm.com/  

| 命令名称                             | 作用             |
| :----------------------------------- | :--------------- |
| git config --global user.name 用户名 | 设置用户签名     |
| git config --global user.email 邮箱  | 设置用户签名     |
| git init                             | 初始化本地库     |
| git status                           | 查看本地库状态   |
| git add 文件名                       | 添加到暂存区     |
| git commit -m "日志信息" 文件名      | 提交到本地库     |
| git reflog                           | 查看历史记录     |
| git log                              | 查看详细版本信息 |
| git reset --hard  版本号             | 版本穿梭         |

## 三、分支

#### 1、分支的操作

| 命令名称            | 作用                         |
| ------------------- | ---------------------------- |
| git branch 分支名   | 创建分支                     |
| git branch -v       | 查看分支                     |
| git checkout 分支名 | 切换分支                     |
| git merge 分支名    | 把指定的分支合并到当前分支上 |

#### 2、代码冲突

###### 解决冲突：

  编辑有冲突的文件，删除特殊符号，决定要使用的内容  

  特殊符号：<<<<<<< HEAD  当前分支的代码 ======= 合并过来的代码 >>>>>>> hot-fix  

- 执行提交（注意：此时使用 git commit 命令时不能带文件名）

## 四、远程仓库

  GitHub 网址[：](https://github.com/)https://github.com/  

#### 1、远程仓库操作



| 命令名称                           | 作用                                                         |
| :--------------------------------- | :----------------------------------------------------------- |
| git remote -v                      | 查看当前所有远程地址别名                                     |
| git remote add 别名 远程地址       | 起别名                                                       |
| git push 别名 分支                 | 推送本地分支上的内容到远程仓库                               |
| git clone 远程地址                 | 将远程仓库的内容克隆到本地                                   |
| git pull 远程库地址别名 远程分支名 | 将远程仓库对于分支最新内容拉下来后与    当前本地分支直接合并 |

```
 git pull git-demo master
```

####  2、跨团队协作

  将远程仓库的地址复制发给邀请跨团队协作的人

![image-20221003144323507](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003144323507.png)

1、  **GitHub** 账号里的地址栏复制收到的链接，然后点击 **Fork** 将项目叉到自己的本地仓库。

2、编辑完毕后，填写描述信息并点击左下角绿色按钮提交。

3、接下来点击上方的 **Pull** **request**请求，并创建一个新的请求。

<img src="https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003144511229.png" alt="image-20221003144511229"  />

#### 3、SSH免密登录

我们可以使用SSH进行登录远程仓库

![image-20221003145423849](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003145423849.png)

```
-运行命令生成.ssh秘钥目录[注意：这里-C这个参数是大写的 C]
-rsa是加密协议
-后面跟的是邮箱
ssh -keygen -t rsa -C atguiguyueyue@aliyun.com
cat id_rsa.pub //获取公钥
公钥可以在c盘用户目录下的.ssh中查看
```

- 在github上点击头像-->点击Settings-->SSH and GPG keys

![image-20221003151039730](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003151039730.png)

- 点击new SSH key

- 起个名字，之后在下面的key文本框中输入刚才获取的公钥

![image-20221003151318652](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003151318652.png)

- 最后可以使用命令：

```
git pull ssh路径 分支名称
```

## 五、在Idea中使用git

#### 1、设置git忽略文件

- 在c盘用户文件下创建git.ignore文本文件，内容填写如下：

```
## Compiled class file
*.class
##Log file
*.log
##BlueJ files
*.ctxt

##Mobile Tools for Java (J2ME)
.mtj.tmp/

##Package Files ##
*.jar
*.war
*.nar
*.ear
*.zip
*.tar.gz
*.rar

.classpath
.project
.settings
.target

.idea
*.iml

```

#### 2、设置.gitconfig(和git.ignore在同一个目录下)

```
[core]
	excludesfile= C:/Users/mrChen/git.ignore
```

#### 3、使用idea进行git初始化

![image-20221003181119462](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003181119462.png)

- 文件红色表示没有添加到暂存区，绿色表示没有提交，正常颜色表示已经提交到本地库，蓝色表示提交过但是被修改了。
- 右键项目点击Git可以执行提交操作

#### 4、查看版本信息

<img src="https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003182114755.png" alt="image-20221003182114755" style="zoom:25%;" />

- 右键相应版本的check可以切换版本

#### 5、创建分支

![image-20221003182500769](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003182500769.png)

#### 6、合并分支

![image-20221003182943051](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003182943051.png)

###### 1、合并冲突

![image-20221003183432379](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003183432379.png)

- 点击Merge

![image-20221003183457378](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003183457378.png)

- 点击》或《选择添加那一行代码，中间的是没有冲突的代码。左右时两个分支提交后不一样的代码

## 六、在Idea中使用github

点击设置进入版本控制，如果没有github在插件里下载github插件

![image-20221003183922953](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003183922953.png)

![image-20221003185201619](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003185201619.png)

注：如果使用密码登录会特别的难登录，所以使用token。（不会的可以网上查一下）

- ###### 上传到github

![image-20221003185412121](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003185412121.png)

- ###### 更改后上传github操作

- ![image-20221003190348345](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003190348345.png)

- ###### 单击分支选择define添加ssh方式，随后push便行

![image-20221003191529743](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003191529743.png)

- ###### pull Github的代码

![image-20221003191944953](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003191944953.png)

- ###### 克隆代码

  ![image-20221003192430476](https://gitee.com/zhi-ming-chenZzz/jquery/raw/master/Csdn/image-20221003192430476.png)
