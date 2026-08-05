<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RocketLaunchSvelte from '../../../lib/16/solid/rocket-launch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: RocketLaunchSvelte,
		args: { class: '' },
	})
</script>

<Story name="RocketLaunch" />
