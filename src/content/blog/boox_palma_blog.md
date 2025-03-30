## Setup
* Install adb and other dependencies
    ```bash
    sudo apt install adb fastboot python3-dev python3-pip liblzma-dev git
    sudo apt purge modemmanager
    ```
* Install `edl` from the official GitHub here -> [EDL GitHub](https://github.com/bkerler/edl) and run the following commands
    ```bash
    git clone https://github.com/bkerler/edl.git
    cd edl
    git submodule update --init --recursive
    chmod +x ./install-linux-edl-drivers.sh
    bash ./install-linux-edl-drivers.sh
    python3 setup.py build
    sudo python3 setup.py install
    ```
* Acquire the appropriate loader for your device. I used [this one](https://github.com/bkerler/Loaders/blob/main/lenovo_motorola/0000000000000000_bdaf51b59ba21d8a_fhprg.bin) and renamed it to `palma_2_loader.bin`

## Install Magisk on the Device

* Download [Magisk](https://github.com/topjohnwu/Magisk)
* Install it to the phone with `adb`
    ```bash
    adb install magisk.apk
    ```
## Use EDL to Get the Boot Partition
* Reboot to `edl` mode
    ```bash
    adb reboot edl
    ```
* Dump the partition table
    ```bash
    edl --loader </path/to/loader.bin> printgpt
    ```

    *NOTE: If everything is working, you should see the partition table get printed to the console*

    *NOTE: If you get an error like the one below, you will need to unplug the USB cable, reboot your device, and try again!!!*
    ```bash
    Capstone library is missing (optional).
    Keystone library is missing (optional).
    Qualcomm Sahara / Firehose Client V3.62 (c) B.Kerler 2018-2024.
    main - Using loader palma_2_loader.bin ...
    main - Waiting for the device
    main - Device detected :)
    main - Mode detected: sahara
    Traceback (most recent call last):
    File "/usr/local/bin/edl", line 4, in <module>
        __import__('pkg_resources').run_script('edlclient==3.62', 'edl')
    File "/usr/lib/python3/dist-packages/pkg_resources/__init__.py", line 656, in run_script
        self.require(requires)[0].run_script(script_name, ns)
    File "/usr/lib/python3/dist-packages/pkg_resources/__init__.py", line 1453, in run_script
        exec(code, namespace, namespace)
    File "/usr/local/lib/python3.10/dist-packages/edlclient-3.62-py3.10.egg/EGG-INFO/scripts/edl", line 393, in <module>
        base.run()
    File "/usr/local/lib/python3.10/dist-packages/edlclient-3.62-py3.10.egg/EGG-INFO/scripts/edl", line 293, in run
        version = conninfo.get("data").version
    AttributeError: type object 'req' has no attribute 'version'
    ```

* Dump the `boot_a` partition to a local file
    ```bash
    edl --loader </path/to/loader.bin> r boot_a boot_a.bin
    ```

* Reboot the device to normal mode
    ```bash
    edl reset
    ```

## Use Magisk to Patch the Boot Partition
* Upload the `boot_a.bin` file to the device
    ```bash
    adb push boot_a.bin /sdcard/boot_a.bin
    ```

    *NOTE: I simply copied this to the `/Documents` directory on the device using the File Explorer on my Linux machine.*

* Open the Magisk app on the device
* In the `Magisk` section of the Home page, select "Install"
* On the next page, click "Select and Patch a File" and select the `boot_a.bin` file
* After selecting the file and allowing the process to complete, you should see the location and name of the file output by Magisk.
* Use `adb` to copy the file to the Linux machine
    ```bash
    adb pull /storage/emulated/0/Download/magisk_patched-28100_mGd4H.img
    ```
* (Optional) Rename the patched file to something easier to remember
    ```bash
    mv magisk_patched-28100_mGd4H.img patched_boot_a.bin
    ```

* Reboot the device to `edl` mode
    ```bash
    adb reboot edl
    ```
* Use `edl` to dump the file back to the partition we dumped from earlier
    ```bash
    edl --loader </path/to/loader.bin> w boot_a patched_boot_a.bin
    ```

* Reboot the device to normal mode
    ```bash
    edl reset
    ```
## Checking the Root Status
* Once the device has booted, open the Magisk app and check if the "Superuser" tab is enabled. If so, you're rooted!
* If you really want, you can use an app like "Root Checker" from the Google Play Store to check the root status.

## Checking the Bootloader Status
* You can also use `fastboot` to check that the bootloader is unlocked 
1. Reboot to bootloader mode
    ```bash
    adb reboot bootloader
    ```
2. Use `fastboot` to check the bootloader status
    ```bash
    fastboot getvar all
    ```
3. In the output of the previous command, check that the `(bootloader) unlocked:yes` is present.
4. Reboot to normal mode
    ```bash
    fastboot reboot
    ```

## Resources and Credits
* https://blog.tho.ms/hacks/2021/03/27/hacking-onyx-boox-note-air.html#root
* https://old.reddit.com/r/Onyx_Boox/comments/1afwxtt/magisk_or_root_on_any_device/kod8a7e/
* https://www.mobileread.com/forums/showthread.php?t=349930
* https://github.com/bkerler/edl/issues/508