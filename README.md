# PNGPlayer
像GIF一样播放PNG。  
Play PNG like GIF.  

```typescript
let pp: PNGPlayer = new PNGPlayer("#img", {
    frames: 4
});
```
  
```html
<div id="img" src="img.png" style="width: 44px; height: 61px;"></div>
```
  
图片像这样：  
Pictures like this:  
  
![PNG](https://github.com/yunbookf/PNGPlayer/raw/master/build/img.png)
  
需要指定 src 图片位置，和 style 设置宽高。  
Need to specify the src images, and style sets the width and height.  
  
Yes, so easy.  
  
# 随时修改行 / change row

```typescript
pp.row = 1;
```
  
# API
  
```typescript
interface PNGPlayerInstance {
    row: number;

    play(): void;
    stop(): void;
    pause(): void;
}
```
  
## 关于 / About
本组件由韩国帅开发开源，欢迎各位PR。  
Powered by Han Guo Shuai, welcome to pull request.  
http://hanguoshuai.com  
  
Translation is provided by Microsoft.