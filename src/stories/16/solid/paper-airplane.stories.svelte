<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperAirplaneSvelte from '../../../lib/16/solid/paper-airplane.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: PaperAirplaneSvelte,
		args: { class: '' },
	})
</script>

<Story name="PaperAirplane" />
