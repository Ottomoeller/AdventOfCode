import java.util.regex.*;
import java.util.List;
import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        String input = "R1, L4, L5, L5, R2, R2, L1, L1, R2, L3, R4, R3, R2, L4, L2, R5, L1, R5, L5, L2, L3, L1, R1, R4, R5, L3, R2, L4, L5, R1, R2, L3, R3, L3, L1, L2, R5, R4, R5, L5, R1, L190, L3, L3, R3, R4, R47, L3, R5, R79, R5, R3, R1, L4, L3, L2, R194, L2, R1, L2, L2, R4, L5, L5, R1, R1, L1, L3, L2, R5, L3, L3, R4, R1, R5, L4, R3, R1, L1, L2, R4, R1, L2, R4, R4, L5, R3, L5, L3, R1, R1, L3, L1, L1, L3, L4, L1, L2, R1, L5, L3, R2, L5, L3, R5, R3, L4, L2, R2, R4, R4, L4, R5, L1, L3, R3, R4, R4, L5, R4, R2, L3, R4, R2, R1, R2, L4, L2, R2, L5, L5, L3, R5, L5, L1, R4, L1, R1, L1, R4, L5, L3, R4, R1, L3, R4, R1, L3, L1, R1, R2, L4, L2, R1, L5, L4, L5";

        String regexPattern = "([a-zA-Z])";

        Pattern p = Pattern.compile(regexPattern);
        List<String> list1 = new ArrayList<String>();
        Matcher m = p.matcher(input);
        while (m.find()) {
            list1.add(m.group());
        }

        String regexPattern2 = "(?:\\d*\\.)?\\d+";
        Pattern p2 = Pattern.compile(regexPattern2);
        List<String> list2 = new ArrayList<String>();
        Matcher m2 = p2.matcher(input);
        while (m2.find()) {
            list2.add(m2.group());
        }

        String[] directions = {"N", "S", "E", "W"};
        int up = 0;
        int right = 0;
        String direction = "N";

        for(int i = 0; i < list1.size(); i++ ){
            if(direction == "N" && list1.get(i).equals("R")){
                right += Integer.parseInt(list2.get(i));
                direction = "E";
            } else if(direction == "N" && list1.get(i).equals("L")){
                right -= Integer.parseInt(list2.get(i));
                direction = "W";
            } else if(direction == "S" && list1.get(i).equals("R")){
                right -= Integer.parseInt(list2.get(i));
                direction = "W";
            } else if(direction == "S" && list1.get(i).equals("L")){
                right += Integer.parseInt(list2.get(i));
                direction = "E";
            } else if(direction == "E" && list1.get(i).equals("R")){
                up -= Integer.parseInt(list2.get(i));
                direction = "S";
            } else if(direction == "E" && list1.get(i).equals("L")){
                up += Integer.parseInt(list2.get(i));
                direction = "N";
            } else if(direction == "W" && list1.get(i).equals("R")){
                up += Integer.parseInt(list2.get(i));
                direction = "N";
            } else if(direction == "W" && list1.get(i).equals("L")){
                up -= Integer.parseInt(list2.get(i));
                direction = "S";
            }
        }
        System.out.println(Math.abs(up)+Math.abs(right));
    }
}
