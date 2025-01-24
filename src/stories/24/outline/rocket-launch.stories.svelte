<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RocketLaunchSvelte from '../../../lib/24/outline/rocket-launch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Outline',
		component: RocketLaunchSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="RocketLaunch" />
