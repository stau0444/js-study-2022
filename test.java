
class ArgTest{

}

class ArgTest2{

}

interface A{
    public void eat(ArgTest argTest);
}

public class test implements A{

    @Override
    public void eat(ArgTest argTest) {
        System.out.println("먹어");
    }

    public ArgTest eat(ArgTest2 a){
        return new ArgTest();
    }

}
class test2 extends test{
    @Override
    public void eat(){
        System.out.println("test2 먹어");
    }
}

class test3 extends test2{
    
}

class RunMain{
    public static void main(String[] args) {
        var test = new test();
        test.eat();

        test3 test3 = new test3();
        test3.eatProtect();
        
    }
}

