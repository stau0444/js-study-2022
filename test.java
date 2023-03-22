
interface A{
    public void eat();
}

public class test implements A{

    @Override
    public void eat() {
        System.out.println("먹어");
    }

}

class RunMain{
    public static void main(String[] args) {
        var test = new test();
        test.eat();
        
    }
}