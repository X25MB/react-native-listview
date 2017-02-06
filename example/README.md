# ImmutableListView Example

## Usage

1. `(cd .. && npm install)` to install in the parent directory
2. `npm install` here
3. `react-native run-android`

## Troubleshooting

There seem to be some issues with Yarn when running an example project nested in a parent directory
(`Failed to build DependencyGraph: @providesModule naming collision` / `This error is caused by a @providesModule declaration with the same name across two different files`).
If you installed with Yarn, you can simply install with npm afterward and that should resolve things.

## Screenshot

![ImmutableListView screenshot](screenshots/listview.png)
