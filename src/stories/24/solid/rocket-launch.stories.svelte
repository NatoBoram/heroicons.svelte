<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RocketLaunchSvelte from '../../../lib/24/solid/rocket-launch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: RocketLaunchSvelte,
		args: { class: '' },
	})
</script>

<Story name="RocketLaunch" />
