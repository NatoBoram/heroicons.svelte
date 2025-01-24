<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperAirplaneSvelte from '../../../lib/16/solid/paper-airplane.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PaperAirplaneSvelte,
		args: { class: 'w-4 h-4' },
	})
</script>

<Story name="PaperAirplane" />
