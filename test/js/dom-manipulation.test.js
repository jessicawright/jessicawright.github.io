describe('removeClass', () => {
    //arrange
    let myParagraph;

    beforeEach( () => {
        myParagraph = document.createElement('p');
        myParagraph.classList.add('test-class');
    });

    test('should remove a class from an element', () => {

        //act
        removeClass(myParagraph, 'test-class');

        //assert
        expect(myParagraph.classList.contains('test-class')).toBeFalsy();
    });
});

function removeClass(element, classToRemove) {
    element.classList.remove(classToRemove);
};
