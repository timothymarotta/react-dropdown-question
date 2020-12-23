package edu.ithaca.dragon.example;

public class ClickCount {
    private int clickCount;

    public ClickCount(){
        clickCount=5;
    }

    public void incrementClickCount(){
        clickCount++;
    }

    public int getClickCount() {
        return clickCount;
    }
    public void setClickCount(int clickCount) {
        this.clickCount = clickCount;
    }
}
