<script module lang="ts">
	import { defineMeta } from '@storybook/addon-svelte-csf'
	import InformationCircleSvelte from '../../../lib/16/solid/information-circle.svelte'

	const { Story } = defineMeta({
		title: 'Heroicons/Micro',
		component: InformationCircleSvelte,
		args: { class: '' },
	})
</script>

<Story name="InformationCircle" />
