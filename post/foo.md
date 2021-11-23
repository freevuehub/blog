## HOC??

컴포넌트를 관리하고 제작하고 만들다 보면 중복되는 코드와 로직을 보는 경우가 많습니다. 왜냐하면 우리는 컴포넌트들을 페이지 우선적으로 보게 됩니다. 각 페이지의 기능을 지원하는 것을 중심으로 보는 것에 습관이 되서 반복적인 코드들을 인지하기 어렵게 되지요.

하지만 우리는 개발자이고, 개발자는 게으릅니다. 같은 로직을 새롭게 짜는 것은 귀찮습니다. 그런 로직들을 함수로 묶어 사용하는 것이 개발자의 습성입니다. React도 이런 개발자들이 개발하여 같은 로직을 묶어 사용할 수 있는 기능을 제공합니다.

## Mixin vs HOC

이 두 개는 React에서 제공해준 반복적인 코드를 묶어서 사용할 수 있게 해준 대표적인 기능입니다. 큰 차이점은 큰 틀로 묶냐, 하나씩 엮냐.. 정도의 차이일 것 같습니다.

> 다른 API나 기능, 방법은 생략..

`Mixin`은 하나의 로직들을 엮고 엮어서 하나의 컴포넌트가 됩니다. 이렇게 계속 추가하다 보면 이건 로직을 반복해서 작성하는 것만도 못한 컴포넌트가 됩니다. 그래서.. React에서는 스펙아웃 처리를 했습니다.

`HOC`는 컴포넌트를 밖에서 한번 더 묶습니다. 감싸고 그걸 다시 감싸는 방법으로 이루어져 있습니다. 쉽게 설명하자면 HOC 함수가 컴포넌트를 인자로 받아 컴포넌트를 리턴합니다.

## HOC 만들기

HOC는 함수로 만듭니다. 인자는 컴포넌트가 들어옵니다. 아시겠지만 React의 컴포넌트들은 두가지 형식을 가지는데 `class`와 `function`입니다. 하지만 우리의 멍청한 친구 `Javascript`는 객체도 함수로 인식합니다. 쉽게 말하면 클래스 컴포넌트도 함수입니다. 그래서 HOC는 return 값이 아래와 같아야 합니다.

 ```jsx
 // 함수 컴포넌트로 return

 const withHoc = (Component) => {
   return () => <Component />
 }
 ```

 ```jsx
 // class 컴포넌트로 return

 const withHoc = (Component) => {
   return class extends React.Component {
     render() {
       return <Component />
     }
   }
 }
 ```

> 컴포넌트를 그냥 return 하면 컴포넌트여야 하는 것이 아닌가...

함수로 반환하는 것과 class로 반환하는 것의 차이는 [***여기***](https://overreacted.io/ko/how-are-function-components-different-from-classes/) (두번 읽어요~)에서 보시면 됩니다. 두개의 차이점이 아주 잘 정리되어 있어서 어떤 형식을 사용할지 정해서 사용하면 됩니다.

> 꼭 `class`와 `function`의 차이를 알고 `HOC`로 만들 것!!

이제 `props`를 넘기는 부분을 보겠습니다. `props`뿐만 아니라 `Lifecycle` 활용도 할 수 있습니다. 그냥 모든 React의 로직을 사용할 수 있습니다.

 ```jsx
 const withHoc = (Component) => {
   const hocProps = {
     title: 'Hello HOC World'
   }

   return (props) => {
     const [hocState] = useState({ comment: 'Here is HOC Lifecycle.' })

     return <Component {...props} {...hocState} {...hocProps} />
   }
 }
 ```

 ```jsx
 const withHoc = (Component) => {
   const hocProps = {
     title: 'Hello HOC World'
   } // 실제로 이렇게 정의해서 넘기는 경우가 있을런지 모르지만...

   return class extends React.Component {
     constructor(props) {
       super(props)

       this.state = {
         comment: 'Here is HOC Lifecycle.',
       }
     }

     componentDidMount() {
       console.log('HOC Mounted')
     }

     render() {
       return <Component {...this.props} {...this.state} {...hocProps} />
     }
   }
 }
 ```

기존에 담기던 `props`를 그대로 담아서 넘겨주고, 추가로 `HOC`가 `props`를 담아서 넘겨 주었습니다. 이렇게 HOC를 아주 아주 간단하게 봤습니다. 잘 이용하면 매우 편한 기능입니다. 하지만...

 ```jsx
 export default withFoo(withBar(withHoc(Component))) // 여기에 Context와 Redux도 추가하면...
 ```

HOC가 좋다고 무조건 다 HOC로 만들어 버리면 안됩니다.
