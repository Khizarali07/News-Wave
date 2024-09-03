import '../Components CSS/style.css';
export default function About() {
  return (
    <>
        <h3 id='heading'>  About-us</h3>
        <div id="border">
        <details className='det'>
            <summary className='sum'>Who we are:</summary>
            A passionate team of environmentalists and tech developers on a mission to empower communities to plant trees and combat climate change
        </details>
        <details className='det'>
            <summary className='sum'>What we do:</summary>
            We created Greenify, a mobile app that makes tree planting fun and accessible. Track your progress, connect with fellow tree-planters, and donate to global reforestation efforts - all through your phone. 
        </details>
        <details className='det'>
            <summary className='sum'>Our Values :</summary>
            This showcases the core principles that guide your project and decision-making process.
        </details>
        </div>
    </>
  )
}