// import FunctionalComponent from "./components/LessonTwo/FunctionalComponent.tsx";
import ArrowFunctionalComponentWithProps from "./components/LessonThree/ArrowFunctionalComponentWithProps.tsx";
// import ClassComponent from "./components/LessonTwo/ClassComponent.tsx";
// import ArrowFunctionalComponent from "./components/LessonTwo/ArrowFunctionalComponent.tsx";
import Layout from "./components/Layout";

// type PropsA = {
//     title: string,
//     description: string,
// }

// type PropsB = {
//     title: string,
//     description: string,
// }
//
// // UNION
// type Status = "Error" | "Warning" | "Info";
//
// // Tuples
// type Coordinates = [number, number];
//
// //Functions
// type ClickHandles = (event: MouseEvent) => void;

//INTERSECTION
// type Props = PropsA & PropsB;
//
// interface PropsTwo {
//     title: string,
//     description: string,
// }
//
// interface  PropsTwo {
//     price: number,
//     sort: number,
// }
//PropsTwo = {title, description, price, sort}

// interface PropsThree extends PropsTwo {
//     image: string,
// }
//PropsThree = {title, description, price, sort, image}

function App() {


  return (
    <>
     {/*<FunctionalComponent />*/}
     {/*<FunctionalComponent />*/}
     {/*<FunctionalComponent />*/}
     {/*<FunctionalComponent />*/}
     {/*<ClassComponent />*/}
     {/*<ArrowFunctionalComponent />*/}
        
     {/*<ArrowFunctionalComponentWithProps title="Heading 1" />*/}
     {/*<ArrowFunctionalComponentWithProps*/}
     {/*    title="Second Title"*/}
     {/*    description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis culpa debitis iste laboriosam magnam minus perspiciatis provident quidem suscipit?" />*/}

    <Layout>
     <ArrowFunctionalComponentWithProps
         title="Second Title"
         description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae corporis culpa debitis iste laboriosam magnam minus perspiciatis provident quidem suscipit?"
        />
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, voluptatibus?</p>
    </Layout>
    </>
  )
}

export default App
