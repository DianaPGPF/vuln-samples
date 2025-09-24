// INTENCIONAL: Uso inseguro de MD5 para hashing
import java.security.MessageDigest;

public class InsecureCrypto {
    public static void main(String[] args) throws Exception {
        String password = (args.length > 0) ? args[0] : "secret";
        MessageDigest md = MessageDigest.getInstance("MD5");
        byte[] hash = md.digest(password.getBytes("UTF-8"));
        System.out.println(bytesToHex(hash));
    }
    private static String bytesToHex(byte[] bytes) {
        StringBuilder sb = new StringBuilder();
        for (byte b : bytes) sb.append(String.format("%02x", b));
        return sb.toString();
    }
}
