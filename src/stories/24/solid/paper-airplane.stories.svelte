<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperAirplaneSvelte from '../../../lib/24/solid/paper-airplane.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Solid',
		component: PaperAirplaneSvelte,
		args: { class: 'w-6 h-6' },
	})
</script>

<Story name="PaperAirplane" />
