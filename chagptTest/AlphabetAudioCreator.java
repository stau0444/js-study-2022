import java.io.*;
import javax.sound.sampled.*;

public class AlphabetAudioCreator {
    public static void main(String[] args) {
        // create an AudioFormat object with the desired properties
        float sampleRate = 44100;
        int sampleSizeInBits = 16;
        int channels = 1;
        boolean signed = true;
        boolean bigEndian = false;
        AudioFormat format = new AudioFormat(sampleRate, sampleSizeInBits, channels, signed, bigEndian);

        // loop through the letters of the alphabet and generate a WAV file for each one
        for (char c = 'a'; c <= 'z'; c++) {
            String fileName = c + ".wav"; // the name of the WAV file to generate
            byte[] audioData = generateAudioData(c, format); // generate the audio data for the letter

            // write the audio data to a file
            try (OutputStream out = new FileOutputStream(fileName)) {
                out.write(audioData);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
    }

    // generate the audio data for a given letter
    private static byte[] generateAudioData(char c, AudioFormat format) {
        byte[] audioData = new byte[format.getFrameSize() * (int)format.getSampleRate()];

        // calculate the frequency of the sine wave based on the letter
        double frequency = getFrequencyForLetter(c);

        // generate a sine wave for the audio data
        double amplitude = 32767; // the maximum amplitude for 16-bit audio
        double durationInSeconds = 1.0; // the duration of the audio file in seconds
        double t = 0; // the current time in seconds
        for (int i = 0; i < audioData.length / format.getFrameSize(); i++) {
            double value = amplitude * Math.sin(2.0 * Math.PI * frequency * t);
            audioData[i * format.getFrameSize()] = (byte)(value);
            audioData[i * format.getFrameSize() + 1] = (byte)(value);
            t += 1.0 / format.getSampleRate();
            if (t > durationInSeconds) {
                break;
            }
        }

        return audioData;
    }

    // calculate the frequency of the sine wave based on the letter
    private static double getFrequencyForLetter(char c) {
        double baseFrequency = 440.0; // the frequency of A4 (letter 'a')
        double semitoneRatio = Math.pow(2.0, 1.0 / 12.0); // the ratio between adjacent semitones
        int semitonesAboveA = c - 'a'; // the number of semitones above A4
        return baseFrequency * Math.pow(semitoneRatio, semitonesAboveA);
    }
}

