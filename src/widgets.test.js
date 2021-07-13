import { initWidgets } from './widgets';

let spy;

test('inits widgets in view', () => {
    spy = jest.spyOn(document, 'getElementById');
    const mockElem = {};
    spy.mockReturnValue(mockElem);
    const widgets = [];
    const view = {
        ui: {
            add(w) {
                widgets.push(w)
            }
        }
    };
    initWidgets(view);
    expect(widgets).toHaveLength(2);
});