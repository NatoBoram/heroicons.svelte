<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import PaperAirplaneSvelte from '../../../lib/20/solid/paper-airplane.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: PaperAirplaneSvelte,
		args: { class: '' },
	})
</script>

<Story name="PaperAirplane" />
