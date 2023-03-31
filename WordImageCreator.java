import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.InputStreamReader;

import javax.imageio.ImageIO;

public class WordImageCreator {
    public static void main(String[] args) {
        int width = 300; // image width in pixels
        int height = 150; // image height in pixels
        String word = "Hello"; // the word to render
        InputStreamReader isr = new InputStreamReader();
        // create a new BufferedImage with the specified width and height
        BufferedImage image = new BufferedImage(width, height, BufferedImage.TYPE_INT_RGB);

        // get the Graphics2D object to draw on the image
        Graphics2D g2d = image.createGraphics();

        // set the background color to white
        g2d.setColor(Color.WHITE);
        g2d.fillRect(0, 0, width, height);

        // set the font and color for the word
        Font font = new Font("Arial", Font.BOLD, 48);
        g2d.setFont(font);
        g2d.setColor(Color.BLACK);

        // calculate the position of the word in the center of the image
        int stringWidth = g2d.getFontMetrics().stringWidth(word);
        int x = (width - stringWidth) / 2;
        int y = height / 2;

        // draw the word on the image
        g2d.drawString(word, x, y);

        // save the image to a file
        try {
            File output = new File("word_image.png");
            ImageIO.write(image, "png", output);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}
