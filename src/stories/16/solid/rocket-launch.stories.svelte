<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RocketLaunchSvelte from '../../../lib/16/solid/rocket-launch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: RocketLaunchSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="RocketLaunch" />
