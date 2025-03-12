class pattern{
    squarePattern(n) {
        for(let i=0; i < n; i++) {
            for(let j=0; j < n; j++) {
                process.stdout.write(" X ");
            }
            console.log();
        }
    }
    triangle1(n) {
        for(let i=0; i < n; i++) {
            for(let j=0;j <= i; j++) {
                process.stdout.write(" X ");
            }
            console.log();
        }
    }
    triangle2_num(n) {
        for(let i=0; i < n; i++) {
            for(let j=0;j <= i; j++) {
                process.stdout.write(` ${j+1} `);
            }
            console.log();
        }
    }
    triangle3_num(n) {
        let num = 1;
        for(let i=0; i < n; i++) {
            for(let j=0;j <= i; j++) {
                process.stdout.write(` ${num} `);
            }
            num++;
            console.log();
        }
    }
    reverse_triangle(n) {
        for(let i=0; i < n; i++) {
            for(let j=0;j < n-i; j++) {
                process.stdout.write(` X `);
            }
            console.log();
        }
    }
    equailateral_triangle(n) {
        let str = 1;
        for(let i=0;i < n; i++) {
            for(let j=0; j < n-1-i; j++) {
                process.stdout.write(" ");
            }
            for(let k=0; k < str; k++) {
                process.stdout.write("X");
            }
            str += 2;
            console.log();
        }
    } 
    diamond_pattern(n) {
        this.equailateral_triangle(n);
        let star = n + (n - 3);
        for(let i=0; i < n-1; i++) {
            for(let j=0; j <= i; j++) {
                process.stdout.write(" ");
            }
            for(let k=0; k < star; k++) {
                process.stdout.write("X");
            }
            star -= 2;
            console.log();
        }
    }
    zero_one_triangle(n) {
        
        for(let i=0; i < n; i++) {
            let val = i % 2 == 0 ? 0 : 1;
            for(let j=0; j <= i; j++) {
                process.stdout.write(` ${val} `);
                val = val == 1 ? 0 : 1;
            }
            console.log();
        }
    }
    half_of_butterfly_pattern(n) {
        let space = (n * 2) - 2;
        for(let i=0; i < n; i++) {
            for(let j=0; j <= i; j++) {
                process.stdout.write('x');
            }
            for(let k=0; k < space; k++) {
                process.stdout.write(' ');
            }
            space -= 2;
            for(let l=0; l <= i; l++) {
                process.stdout.write('x');
            }
            console.log();
        }
        // if i reverse this step that can make butterfly
    }
}
