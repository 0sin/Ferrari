# Ferrari Website [1조]

## 1. Ferrari 프로젝트 소개

## +개요

- 기간: 2020.11.09? - 11.27
- 팀원: 정영신 류희경 안재민 김영보
- Ferrari 사이트: [https://www.ferrari.com/en-KR](https://www.ferrari.com/en-KR)
- 프로젝트 사이트:  [https://beals1129.github.io/Ferrari/index.html](https://beals1129.github.io/Ferrari/index.html)

## +협업툴

- **JANDI (잔디)**
- **GitHub**
- 발표자료 제작 **Notion**

## +사용 언어

- HTML & CSS
- JavaScript

# 2. Ferrari 사이트 특징

## +대표 컬러 헥스 코드

![d40000](https://user-images.githubusercontent.com/69961808/108671353-a5bf1280-7523-11eb-94ab-6c48358c0a37.png)
![FF2800](https://user-images.githubusercontent.com/69961808/108671364-ace62080-7523-11eb-9afd-0548469fb131.png)


## +폰트

![ferrarifont](https://user-images.githubusercontent.com/69961808/108671438-cc7d4900-7523-11eb-8c60-0c42e521cf71.png)


메인 타이틀 폰트 : Noe-Display-Regular
바디 기본 폰트: gt-america-standard
기타요소: Open Sans Regular


## +동일한 디자인 요소의 반복

- 사이트 전체 디자인 요소가 반복되어 사이트 전체에 통일감을 줌.
- 초반에 기본 요소 생성에 시간이 들지만 기초 작업 이후부터는 빠르게 진척 가능

![svgwheel](https://user-images.githubusercontent.com/69961808/108671515-eb7bdb00-7523-11eb-857d-a0796475ee76.gif)
![matrix](https://user-images.githubusercontent.com/69961808/108671547-f8003380-7523-11eb-8826-85e507534a3a.gif)


# +Ferrari Breakpoint

### ✦ PC: 1281px 이상

### ✦ Tablet

### - 1280px 이하 Header 변경, 메뉴페이지 구성도 함께 변화

### - 960px 이하 Footer  변경

### ✦ Mobile: 600px 이하, 모바일 전용 이미지


# 3. Project Issue

## +Header

![Ferrari Website  1조  4a4b9253c26c442195e142b65fe4e4cd](https://user-images.githubusercontent.com/69961808/108671799-57f6da00-7524-11eb-916a-3715e261af51.png)

스크롤 다운시 사라졌다가 올라갈때에는 **검정색**, viewport 최상단 에서는 **투명한 헤더**로 변경


1차 코드는 <header> 태그를 2개 생성한 뒤 투명한 헤더와 검정색 헤더를 번갈아 나타나도록 작성.
그러나 1280px 이하에서 풀페이지 메뉴가 1개에서 2개로 중첩되어 생성되므로 태그와 코드가 충돌할 것을 염려하여 1개의 <header> 태그만을 이용하도록 수정.

2차 수정 2개의 함수로 작성했던 코드를 if 조건에 && 논리 연산자를 사용해 하나의 함수로 합쳐서 작성하여 함수와 코드를 단축시킴.


## +Matrix

![4](https://user-images.githubusercontent.com/69961808/108671901-870d4b80-7524-11eb-8693-054c8ff211c8.gif)
matrix (scaleX, skewX, skewY, scaleY, translateX, translateY)

transform 의 요소들을 한번에 사용하는 것

<h2> 태그 안에 Title 요소를 <span> 태그로 묶어 animation-delay 를 주었다.

또한 <h2> 태그에 overflow : hidden; 을 주어 글씨가 나타나는 효과를 더했다.

```jsx
for ( i =0; i<mainTitle[0].children.length; i++){

mainTitle[0].children[i].style=
"animation: matrix 1s ease-in forwards; animation-delay:"+(0.03* i)+"s;";

}
// > children 으로 span 태그를 전부 선택하고 delay를 for문으로 주어 각각 작동하도록 작성
```

## +반응형 FullPage video


<video> 태그는 100%나 100vh 로 설정을 한다면 화면이 줄었을 때 영상의 비율이 변한다.

<video> 태그를 감싸는 div를 만들어 width : 100%;  height :100vh 를 준 뒤,

**video 태그를 absolute 로 띄우고 left 50% 로 중앙 정렬** 해주어 중앙의 영상이 상영되도록 설정한다.

## +마우스를 따라다니는 원, Click Event

![2 1](https://user-images.githubusercontent.com/69961808/108671977-a4421a00-7524-11eb-86f6-95685d593439.png)
![1 1](https://user-images.githubusercontent.com/69961808/108672005-aefcaf00-7524-11eb-8362-18ccc74a802e.png)


.clientX, .clientY > 현재 마우스 포인트 위치

### top = mouse.clientY - outRect.top - (inside.clientHeight/2)

top = 마우스 Y 위치 - 큰사각형 top - ( 작은 원 Height / 2 ) 

### left =  mouse.clientX - outRect.left - (inside.clientWidth/2)

left = 마우스 X 위치 - 큰사각형 left - ( 작은 원 Width / 2 ) 

**issue 1** 화면을 줄이면 위치값이 고정되어 마우스를 따라오지 않는 문제

function 안에 mouse.clientX, outRect.left  등 변수를 재 정의해서 화면의 크기가 변해도 계속 값을 찾도록 수정했다.

**issue 2** 마우스 클릭시에 mouseout 함수가 계속 실행되어 원의 크기가 작게 돌아가는 문제

변경 될 함수와 변경되지 않을 함수를 각각 정의해서 변경될 함수를 removeEventListener로 잠시 지워준 뒤 다시한번 클릭 시 addEventListener 로 다시 활성화 시켜주었다.



## +NEWS SLIDE SHOW

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__7.23.53.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__7.23.53.png)

### ✦ 슬라이드 요소 정리

![slide](https://user-images.githubusercontent.com/69961808/108672177-f71bd180-7524-11eb-9165-4e400897fbbd.png)

1. Prev/Next Button
2. Index Button
3. Title Matrix Animation
4. Text Opacity, Up&Down
5. Image Opacity, Background-color Slide
6. AutoPlay, Red Wheel Timer

## +812 Superfast 상세페이지 스크롤 이벤트

각 섹션의 offsetTop 값을 구해서 반응형에서도 작동되게끔 스크롤 이벤트 작성.

Ferrari 사이트의 스크롤 이벤트는 빠르고 자연스럽게 진행되는 것이 특징.

그러나 반응이 너무 빠른 감이 있어 스크롤 이벤트의 트리거 수치를 더 느리게 수정함.  

## +MENU style / button

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__4.06.24.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__4.06.24.png)

✔️ 미디어 show function

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__4.30.11.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__4.30.11.png)

✔️ 메뉴 show function

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__4.30.25.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__4.30.25.png)

✔️ 메뉴 open / close 버튼 

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__4.30.39.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__4.30.39.png)

🤮🤮🤮🤮🤮🤮

## +Filter menu

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/6.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/6.png)

- 필터 메뉴 오픈시 matrix 작용

카테고리 선택시 해당 카테고리 뉴스만 모아주는 기능 구현 실패

## +바로가기 버튼

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/5.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/5.png)

- 화면 우측에 페이지 최상단으로 가는 ↑버튼
-> **window.scrollTo(0,0) 메소드** 적용해 구현
- 화면 우측에 푸터를 스크롤이 현재 위치한 곳에서 보여주는 + 버튼 fix 페이지 특성상 페이지가 길어지기 때문에 꼭 필요한 기능
->레이어 팝업 기능으로 시도해봤지만 실패 푸터를 하단에 위치시켜 숨기고 버튼을 누르면 **scrollTo 기능으로 하단 푸터로 이동하며 나타나는 것으로 대체** 스크롤로 푸터 위치에 도달시에는 버튼이 사라지고 올라가면 버튼이 다시 나타나도록 구현

## +Scroll fade in

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/KakaoTalk_20201126_223158376.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/KakaoTalk_20201126_223158376.png)

- 하단으로 스크롤시 가려져있던 뉴스 자동 로딩
-> offsettop값 구해서 자동 실행되도록 구현 위쪽부터 또 왼쪽 뉴스부터 순차적으로 나타나게 하기 위해 뉴스 순서별로 애니메이션 시간차를 두었음

## +sns 공유버튼

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/KakaoTalk_20201126_223158734.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/KakaoTalk_20201126_223158734.png)

SNS공유 버튼 클릭시 각 뉴스 콘텐츠마다 메뉴 오픈/클로즈 독립 작용
-> 넷플릭스 아코디언 기능 이용해 구현

오픈/클로즈를 하나의 div로 묶어서 트리거를 하나인 것처럼 속임 또 페라리는 뉴스마다 창이 각각 오픈상태를 유지하지만 굳이 필요없는 기능이라 한쪽에서 열리면 다른쪽은 닫히도록 구현

## +getDate()

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/KakaoTalk_20201126_223158989.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/KakaoTalk_20201126_223158989.png)

Ferrari 사이트는 DB와 연동해 뉴스마다 실제작성 시간-현재시간의 차이를 보여주고 있어 구현 불가

**getDate() 메소드 사용해 현재 시간 표기로 대치** for반복문 사용해서 같은 이름의 여러 클래스에 동시에 넣어줌

- 디자인 또한 본래의 사이트와 비슷하게 구성

## 4. 프로젝트 후 느낀점

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__1.37.29.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__1.37.29.png)

요소가 많은 큰 프로젝트일 수록 **기초공사를 탄탄하게** 하는 것이 중요하다!

특히 여러 사람이 보는 코드일 경우 이후 작업자를 위해 Class 이름을 상세하게 지어 **누가 봐도 어떤 내용인지 알 수 있게 하는 것**이 좋다.

이는 후반 작업과 유지보수에도 유리하다.

![Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__2.42.29.png](Ferrari%20Website%20%5B1%E1%84%8C%E1%85%A9%5D%204a4b9253c26c442195e142b65fe4e4cd/_2020-11-27__2.42.29.png)

특히, 위처럼 막연한 Class 이름은 나중에 스타일에서 충돌을 일으킬 수 있으니 주의한다.
