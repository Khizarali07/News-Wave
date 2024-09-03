import '../Components CSS/style.css';

export default function Contact() {
  return (
    <>
        <h3 id='heading'>Contact-us</h3>
        <div id="border">
        <details className='det'>
            <summary className='sum'>Lets Chat ((&#128525;))</summary>
            We'd love to hear from you! Reach out with any questions, feedback, or collaboration ideas.
        </details>
        <details className='det'>
            <summary className='sum'>Get in Touch &#128512;</summary>
            We're here to help! Whether you need assistance, want to say hello, or have a brilliant idea, use the form below or choose your preferred contact method.
        </details>
        <details className='det'>
            <summary className='sum'>Connect with Us</summary>
            We value open communication. Drop us a line, give us a call, or follow us on social media to stay connected.
        </details>
        </div>
    </>
  )
}