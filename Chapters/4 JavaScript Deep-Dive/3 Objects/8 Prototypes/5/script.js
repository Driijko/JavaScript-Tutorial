    // Using '.create' Method
    const rec3 = Object.create(rec, {
        _width: {
            value: 1,
            writable: true,
        },
        _height: {
            value: 1,
            writable: true,
        },
        width: {
            enumerable: true,
            get() {
                return this._width;
            },
            set(width) {
                if (Number.isInteger(width) && width >= 1) {
                    this._width = width;
                }
            },
        },
        height: {
            enumerable: true,
            get() {
                return this._height;
            },
            set(height) {
                if (Number.isInteger(height) && height >= 1) {
                    this._height = height;
                }
            },
        },
    });

    info.display(rec3);
    rec3.doubleSize();
    info.display(rec3);