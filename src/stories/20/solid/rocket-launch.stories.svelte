<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import RocketLaunchSvelte from '../../../lib/20/solid/rocket-launch.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: RocketLaunchSvelte,
		args: { class: '' },
	})
</script>

<Story name="RocketLaunch" />
