<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import Cog6ToothSvelte from '../../../lib/20/solid/cog-6-tooth.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Mini',
		component: Cog6ToothSvelte,
		args: { class: 'w-5 h-5' },
	})
</script>

<Story name="Cog6Tooth" />
