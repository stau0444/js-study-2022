import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.util.HashMap;
import java.util.Map;

import javax.sound.sampled.*;

public class WordAudioCreator {
    public static void main(String[] args) {
        String word = "안녕녕하하세세요요"; // the word to generate audio for

        // create a map of phonemes to audio files
        Map<String, String> phonemes = new HashMap<>();
        phonemes.put("안", "sounds/안.wav");
        phonemes.put("녕", "sounds/녕.wav");
        phonemes.put("하", "sounds/하.wav");
        phonemes.put("세", "sounds/세.wav");
        phonemes.put("요", "sounds/요.wav");

        // create an AudioFormat object with the desired properties
        float sampleRate = 25000;
        int sampleSizeInBits = 16;
        int channels = 1;
        boolean signed = true;
        boolean bigEndian = false;
        AudioFormat format = new AudioFormat(sampleRate, sampleSizeInBits, channels, signed, bigEndian);

        // create a byte array output stream to store the audio data
        ByteArrayOutputStream out = new ByteArrayOutputStream();

        // loop through each character in the word and append the corresponding audio file to the output stream
        for (int i = 0; i < word.length(); i++) {
            String phoneme = String.valueOf(word.charAt(i)).toLowerCase();
            if (phonemes.containsKey(phoneme)) {
                String audioFile = phonemes.get(phoneme);
                try (AudioInputStream in = AudioSystem.getAudioInputStream(new File(audioFile))) {
                    byte[] buffer = new byte[1024];
                    int bytesRead;
                    while ((bytesRead = in.read(buffer)) > 0) {
                        out.write(buffer, 0, bytesRead);
                    }
                } catch (IOException | UnsupportedAudioFileException e) {
                    e.printStackTrace();
                }
            }
        }

        // create a byte array from the output stream data
        byte[] audioData = out.toByteArray();

        // create an input stream from the byte array
        ByteArrayInputStream in = new ByteArrayInputStream(audioData);

        // create a DataLine.Info object for the audio format
        DataLine.Info info = new DataLine.Info(SourceDataLine.class, format);

        // create a new SourceDataLine with the specified format
        try (SourceDataLine line = (SourceDataLine) AudioSystem.getLine(info)) {
            // open the line and start playing the audio data
            line.open(format);
            line.start();

            // create a buffer to read the audio data in chunks
            byte[] buffer = new byte[1024];
            int bytesRead;

            // read the audio data from the input stream and write it to the SourceDataLine
            while ((bytesRead = in.read(buffer)) != -1) {
                line.write(buffer, 0, bytesRead);
            }

            // wait for the audio to finish playing
            line.drain();
            line.stop();
        } catch (LineUnavailableException | IOException e) {
            e.printStackTrace();
        }
    }
    
    
}
