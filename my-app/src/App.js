import react from 'react';
import style from './App.module.css';

export default function App() {

  return (
    <react.Fragment>
      <main className={style.main}>
        <section className={style.section}>

          <h1 className={style.h1}><code>File upload with Formidable npm package</code></h1>

          <form action='/api/upload' method='post' encType="multipart/form-data">
            <div className={style.div}>
              <input type="file" name='myFile' required />
              <input type="submit" value="Upload Single file" className={style.btn} />
            </div>
          </form>

          <form action='/api/uploadMultiple' method='post' encType="multipart/form-data">
            <div className={style.div}>
              <input type="file" name='myFiles' multiple required />
              <input type="submit" value="Upload Multiple File" className={style.btn} />
            </div>
          </form>

        </section>
      </main>
    </react.Fragment>
  );
}