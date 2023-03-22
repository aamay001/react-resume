import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import VisibilityChanger from '../components/Tools/VisibilityChanger';
import Resume from '../components/Resume';

// TODO: add tests for checking ItemToggleButton[data-testid='showSkillLevel'] button functioning
// TODO: include MoreVisibilityButton within tests

// TODO?: isolate assertions checking for specific tree structures, classes, etc. for easier testing

describe('Toggle buttons render as expected, displayed under "Visibility" with eye icon', () => {
  test('Container for toggle buttons renders as expected', () => {
    const { getByTestId } = render(
      <Provider store={store}><VisibilityChanger /></Provider>,
    );

    // get root node created by VisibilityChanger
    const vc = getByTestId('VisibilityChanger');

    // should have class "json-resume-tool"
    expect(vc.classList).toContain('json-resume-tool');

    // should contain 17 child elements
    expect(vc.childElementCount).toBe(17);

    // first child should be a div with expected classes
    const label = vc.firstChild;
    expect(label.tagName).toBe('DIV');
    expect(label.classList).toContain('ui', 'big', 'basic', 'label');

    // first child should contain 2 nodes (icon and text) with expected attributes and classes
    expect(label.childNodes.length).toEqual(2);
    const [icon, text] = label.childNodes;
    expect(icon.tagName).toBe('I');
    expect(icon.getAttribute('aria-hidden')).toBe('true');
    expect(icon.classList).toContain('eye', 'icon');
    expect(text.nodeName).toBe('#text');

    // text node should have value "Visibility"
    expect(text.nodeValue).toEqual('Visibility');
  });

  test('Toggle buttons render as expected', () => {
    const { getByTestId } = render(
      <Provider store={store}><VisibilityChanger /></Provider>,
    );

    /*
        * data-testids for toggle-able resume elements
        * each corresponding toggle button has data-testid = 'show' + resume element's data-testid
        * (eg. "Email", "showEmail")
        */
    const dataTestIDs = ['Email', 'Phone', 'Github', 'LinkedIn', 'Website', 'Address', 'Certification', 'Education', 'Experience', 'Projects', 'TechSkills', 'SkillLevel'];

    dataTestIDs.forEach((id) => {
      // get btn el
      const btn = getByTestId(`show${id}`);

      // expect each button to be a child of the VisibilityChanger container
      expect(btn.parentNode.isSameNode(getByTestId('VisibilityChanger'))).toBeTruthy();

      // expect each button to be a button element, classlist containing "ui large fluid button"
      expect(btn.tagName).toBe('BUTTON');
      expect(btn.classList).toContain('ui', 'large', 'fluid', 'button');

      // expect it to contain a div with classlist "ui toggle checkbox"
      const div = btn.children[0];
      expect(div.classList).toContain('ui', 'toggle', 'checkbox');

      // expect the div to contain an input with class 'hidden' and type 'checkbox'
      const [input, label] = div.children;
      expect(input.tagName).toBe('INPUT');
      expect(input.classList).toContain('hidden');
      expect(input.getAttribute('type')).toBe('checkbox');

      /* expect the div to also contain a label containing `Show ${id}` */
      expect(label.tagName).toBe('LABEL');

      // workaround for ids that do not match wording of their labels
      let textInLabel = '';
      if (id === 'Certification') {
        textInLabel = 'Certifications';
      } else if (id === 'TechSkills') {
        textInLabel = 'TechnicalSkills';
      } else {
        textInLabel = id;
      }

      let wordsArry = '';
      // ignore 'LinkedIn' when dividing words
      if (textInLabel !== 'LinkedIn') {
        wordsArry = textInLabel.match(/[A-Z][a-z]+/g);
      } else {
        wordsArry = [textInLabel];
      }
      const wordsStr = wordsArry.join(' ');
      expect(label.innerHTML).toBe(`Show ${wordsStr}`);
    });
  });
});

describe('Toggle buttons work as expected', () => {
  test('Resume content visibility matches corresponding toggle button status on load', () => {
    const { getByTestId } = render(
      <Provider store={store}><VisibilityChanger /></Provider>,
    );

    render(<Provider store={store}><Resume /></Provider>);

    // note: "showSkillLevel" toggle button not being tested yet
    const dataTestIDs = ['Email', 'Phone', 'Github', 'LinkedIn', 'Website', 'Address', 'Certification', 'Education', 'Experience', 'Projects', 'TechSkills', 'SkillLevel'];

    dataTestIDs.forEach((id) => {
      // if toggle button status is on, corresponding resume content should be visible
      if (getByTestId(`show${id}`).children[0].classList.contains('checked')) {
        expect(getByTestId(id)).toBeInTheDocument();
      } else {
        // if toggle button status is off, corresponding resume content should not be visible
        expect(() => {
          getByTestId(id);
        }).toThrow();
      }
    });
  });

  test('Toggle button click updates toggle button status and corresponding resume content visibility', () => {
    const { getByTestId } = render(
      <Provider store={store}><VisibilityChanger /></Provider>,
    );

    render(<Provider store={store}><Resume /></Provider>);

    // note: "showSkillLevel" toggle button not being tested yet
    const dataTestIDs = ['Email', 'Phone', 'Github', 'LinkedIn', 'Website', 'Address', 'Certification', 'Education', 'Experience', 'Projects', 'TechSkills'];

    dataTestIDs.forEach((id) => {
      // toggling off should update toggle button status from on to off
      // corresponding resume content should disappear
      if (getByTestId(`show${id}`).children[0].classList.contains('checked')) {
        fireEvent.click(getByTestId(`show${id}`));
        expect(getByTestId(`show${id}`).children[0].classList).not.toContain('checked');
        expect(() => {
          getByTestId(id);
        }).toThrow();
      } else {
        // toggling on should update toggle button status from off to on
        // corresponding resume content should appear
        fireEvent.click(getByTestId(`show${id}`));
        expect(getByTestId(`show${id}`).children[0].classList).toContain('checked');
        expect(getByTestId(id)).toBeInTheDocument();
      }
    });
  });
});
