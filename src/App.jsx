import Demo from "./Demo";
import Counter from "./Counter";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="border border-4 border-pink-500">
        <h1>HARE KRISHNA</h1>
        <p>This is App page</p>
      </div>
      <br/>
      <div className="border border-4 border-pink-500">
        <h2>this content is inside the App component</h2>
        <Demo />
      </div>
      <br/>
      <div className="border border-4 border-pink-500">
        <Counter />
      </div>
      <br/>
      <div className="border border-4 border-pink-500">
        <Card username="Jagannath Puri" imgSrc="https://i.pinimg.com/736x/a9/20/0d/a9200d2079ff66d583f09d59263feeb8.jpg" />
        <br/>
        <Card username="Ram Mandir" imgSrc="https://static.india.com/wp-content/uploads/2024/06/Ayodhya-ram-mandir7-1.jpg?impolicy=Medium_Widthonly&w=400&h=800" />
        <br/>
        <Card username="Vrindvan" imgSrc="https://www.konkan.me/wp-content/uploads/2024/02/1-Places-to-Visit-in-Vrindavan.jpg" />
        <br/>
        <Card username="GOLOK DHAN" imgSrc="https://www.shri-kripalu-kunj-ashram.org/uploads/1/9/8/0/19801241/published/radha-krishna-arti-poster-4-blured_1.jpg?1539395085" />
        <br/>
        <Card username="SAKIR DHAN" imgSrc="https://miro.medium.com/v2/resize:fit:800/0*8Mdq7scRdNVdEn_T.jpeg" />
        <br/>
        <Card username="VIKUNTA" imgSrc="https://qph.cf2.quoracdn.net/main-qimg-799b79bc9da00cf2b106dd921378453e-lq" />
      </div>
    </>
  );
}

export default App;
