import type { Component } from 'solid-js';
// import Contact from './contact';
import Links from './links';
import Profile from './profile';

const App: Component = () => {
  return (
    <>
      <nav>
        <a href="https://github.com/ZackarySantana/Attach" target="_blank" class="text-center w-full block text-sm text-[#4ea8ed] font-mono">|attach|</a>
      </nav>
      <main>
        <Profile />
        {/* <Contact /> */}
        <Links />
      </main>
    </>
  );
};

export default App;