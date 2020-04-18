import React, { useState } from 'react';
import Header from './Header';
import Resource from './Resource';
import './index.css'

function App () {
  const [resource, setresource] = useState([
    //contains all the information of the resource page
    {
      title: 'What is self-esteem',
      content: 'We all have times when we lack confidence and do not feel good about ourselves. But when low self-esteem becomes a long-term problem, it can have a harmful effect on our mental health and our day-to-day lives. Self-esteem is the opinion we have of ourselves. When we have healthy self-esteem, we tend to feel positive about ourselves and about life in general. It makes us better able to deal with life\'s ups and downs. When our self-esteem is low, we tend to see ourselves and our life in a more negative and critical light.',
      open: false
    },
    {
      title: 'Stress',
      content: 'Most people feel stressed sometimes and some people find stress helpful or even motivating. But if stress is affecting your life, there are things you can try that may help. Support is also available if you\'re finding it hard to cope with stress. Symptoms of stress Stress can cause many different symptoms. It might affect how you feel physically, mentally and also how you behave.',
      open: false
    },
    {
      title: 'Depression',
      content: 'Depression is more than simply feeling unhappy or fed up for a few days. Most people go through periods of feeling down, but when you\'re depressed you feel persistently sad for weeks or months, rather than just a few days. Some people think depression is trivial and not a genuine health condition. They\'re wrong – it is a real illness with real symptoms. ',
      open: false
    },
    {
      title: 'Anxiety',
      content: 'Anxiety is a feeling of unease, such as worry or fear, that can be mild or severe. Everyone has feelings of anxiety at some point in their life. For example, you may feel worried and anxious about sitting an exam, or having a medical test or job interview. During times like these, feeling anxious can be perfectly normal. But some people find it hard to control their worries.',
      open: false
    },
    {
      title: 'Panic disorder',
      content: 'Panic disorder is an anxiety disorder where you regularly have sudden attacks of panic or fear. Everyone experiences feelings of anxiety and panic at certain times. It\'s a natural response to stressful or dangerous situations. But for someone with panic disorder, feelings of anxiety, stress and panic occur regularly and at any time, often for no apparent reason. Anxiety is a feeling of unease.',
      open: false
    },
    {
      title: 'Obsessive compulsive disorder (OCD) ',
      content: 'Obsessive compulsive disorder (OCD) is a common mental health condition where a person has obsessive thoughts and compulsive behaviours. OCD can affect men, women and children. Some people start having symptoms early, often around puberty, but it usually starts during early adulthood. OCD can be distressing and significantly interfere with your life, but treatment can help you keep it under control.',
      open: false
    },
 
  ]);

  //this function changes state of any buttons that is clicked on by the user.
  const toggleResource = index => {
    setresource(resource.map((resource, i) => {
      if (i === index) {
        resource.open = !resource.open;
      } else {
        //this line allows only one button to be open.
        resource.open = false;
      }

      return resource;
    }))
  };


  //component that displays everything
  return (
    <div className="App">
      <Header /> 
      <div className="resource">
        {/* for every resource in the resource array, JSX code must be returned. */}
        {resource.map((resource, i) => (
          <Resource resource={resource} index={i} toggleResource={toggleResource} />
        ))}

      </div>
    </div>
  );
}

export default App;
