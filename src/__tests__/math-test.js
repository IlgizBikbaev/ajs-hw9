import { MathAttack }  from "../js/math.js";

test('Maathattack standart', () => {
    const player = new MathAttack(50, 1);
    expect(player.attack).toBe(50);
});

test('Maathattack with stoned', () => {
    const player = new MathAttack(50, 2);
    player.stoned = true;
    expect(player.attack).toBe(40);
});

test('Maathattack with stoned Math.rond', () => {
    const player = new MathAttack(50, 5);
    player.stoned = true;
    expect(player.attack).toBe(18);
});

test('Maathattack with stoned <0', () => {
    const player = new MathAttack(50, 15);
    player.stoned = true;
    expect(player.attack).toBe(0);
});