import React from "react";
import '@testing-library/jest-dom/extend-expect'
import {render, fireEvent} from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../store';
import VisibilityChanger from "../components/Tools/VisibilityChanger";
import Resume from "../components/Resume";

// TODO: add tests for checking ItemToggleButton[data-testid='showSkillLevel'] button functioning
// TODO: include MoreVisibilityButton within tests

// TODO?: isolate assertions checking for specific tree structures, classes, etc. so that if minor changes are made to how these components render it'll be easier to update tests


describe(`Toggle buttons render as expected, displayed under "Visibility" with eye icon`, () => {

    test(`Container for toggle buttons renders as expected`, () => {

        const {getByTestId} = render(
            <Provider store={store}><VisibilityChanger/></Provider>
        )
        
        // get root node created by VisibilityChanger
        const vc = getByTestId('VisibilityChanger');

        // should have class "json-resume-tool"
        expect(vc.classList).toContain('json-resume-tool');

        // should contain 14 child elements
        expect(vc.childElementCount).toBe(14);
        
        // first child should be a div with expected classes
        const label = vc.firstChild;
        expect(label.tagName).toBe('DIV');
        expect(label.classList).toContain('ui', 'big', 'basic', 'label');

        // first child should contain 2 nodes (icon and text) with expected attributes and classes
        expect(label.childNodes.length).toEqual(2);
        const [icon, text] = label.childNodes;
        expect(icon.tagName).toBe('I');
        expect(icon.getAttribute('aria-hidden')).toBe("true");
        expect(icon.classList).toContain('eye', 'icon');
        expect(text.nodeName).toBe('#text');

        // text node should have value "Visibility"
        expect(text.nodeValue).toEqual("Visibility");

    })


    test(`Toggle buttons render as expected`, () => {

        const {getByTestId} = render(
            <Provider store={store}><VisibilityChanger/></Provider>
        )

        /* 
            * data-testids for toggle-able resume elements (eg. "Email")
            * each corresponding toggle button has a data-testid = 'show' + the resume element's data-testid, (eg. "showEmail")
        */
        const dataTestIDs = ["Email", "Phone", "Github", "LinkedIn", "Website", "Address", "Certification", "Education", "Experience", "Projects", "TechSkills", "SkillLevel"];


        dataTestIDs.map(id => {
            // get btn el
            const btn = getByTestId(`show${id}`);

            // expect each button to be a child of the VisibilityChanger container
            expect(btn.parentNode.isSameNode(getByTestId('VisibilityChanger'))).toBeTruthy();

            // expect each button to be a button element and have classlist containing "ui large fluid button"
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

            /// workaround for ids that do not match wording of their labels
            if (id === 'Certification') {
                id = 'Certifications';
            } 
            if (id === 'TechSkills'){
                id = 'TechnicalSkills'
            }
    
            let wordsArry = '';
            
            /// ignore 'LinkedIn' when dividing words
            if (id !== 'LinkedIn'){
                wordsArry = id.match(/[A-Z][a-z]+/g);
            } else {
                wordsArry = [id];
            }
            const wordsStr = wordsArry.join(' ');
            expect(label.innerHTML).toBe(`Show ${wordsStr}`);

        })
        
    })
    
})


describe(`Toggle buttons work as expected`, () => {

    test(`Resume content visibility matches corresponding toggle button status on load`, () => {

        const {getByTestId} = render(
            <Provider store={store}><VisibilityChanger/></Provider>
        )
        const resume = render(<Provider store={store}><Resume/></Provider>);
       
        // note: "showSkillLevel" toggle button not being tested yet
        const dataTestIDs = ["Email", "Phone", "Github", "LinkedIn", "Website", "Address", "Certification", "Education", "Experience", "Projects", "TechSkills"];
        
        dataTestIDs.map(id => {
            // if toggle button status is on by default, corresponding resume content should also be visible
            if(getByTestId(`show${id}`).children[0].classList.contains("checked")) {
                expect(getByTestId(id)).toBeInTheDocument();
            } else {
                // if toggle button status is off by default, corresponding resume content should not be visible
                expect(()=> {
                    getByTestId(id) 
                }).toThrow();
            }
        })
            
    })

    test(`Toggle button click updates toggle button status and corresponding resume content visibility`, () => {

        const {getByTestId} = render(
            <Provider store={store}><VisibilityChanger/></Provider>
        )
        const resume = render(<Provider store={store}><Resume/></Provider>);

        // note: "showSkillLevel" toggle button not being tested yet
        const dataTestIDs = ["Email", "Phone", "Github", "LinkedIn", "Website", "Address", "Certification", "Education", "Experience", "Projects", "TechSkills"];
        
        dataTestIDs.map(id => {
            // toggling off should update toggle button status from on to off, and corresponding resume content should disappear
            if(getByTestId(`show${id}`).children[0].classList.contains("checked")) {
                fireEvent.click(getByTestId(`show${id}`));
                expect(getByTestId(`show${id}`).children[0].classList).not.toContain("checked");
                expect(()=> {
                    getByTestId(id) 
                }).toThrow();
            } else {
                // toggling on should update toggle button status from off to on, and corresponding resume content should appear
                fireEvent.click(getByTestId(`show${id}`));
                expect(getByTestId(`show${id}`).children[0].classList).toContain("checked");
                expect(getByTestId(id)).toBeInTheDocument();
            }
        })
            
    })


})



