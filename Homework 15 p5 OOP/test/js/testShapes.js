class Rectangle
{
    // creates object constructor for Rectangle class
    // x = x-coordinate, y = y-coordinate, w = width, h = height, r = red, g = green, b = blue
    constructor(x, y, w, h, r, g, b)
    {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display()
    {
        fill(this.r, this.g, this.b);
        rect(this.x, this.y, this.w, this.h);
    }
}



class Quadrilateral
{
    // creates object constructor for Quadrilateral class
    // xn = x-coordinates, yn = y-coordinates, r = red, g = green, b = blue
    constructor(x1, y1, x2, y2, x3, y3, x4, y4, r, g, b)
    {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.x3 = x3;
        this.y3 = y3;
        this.x4 = x4;
        this.y4 = y4;
        this.r = r;
        this.g = g;
        this.b = b;
    }

    display()
    {
        fill(this.r, this.g, this.b);
        quad(this.x1, this.y1, this.x2, this.y2, this.x3, this.y3, this.x4, this.y4);
    }
}